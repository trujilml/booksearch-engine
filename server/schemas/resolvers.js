const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                .select('-__v -password')
                .populate('books');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

    },

        // users: async() => {
        //     return User.find()
        //     .select('-__v -password')
        //     .populate('books');
        // },
        // user: async (parent, { username }) => {
        //     return User.findOne({username})
        //     .select('-__v -password')
        //     .populate('books');
        // },
        // books: async (parent, {username}) => {
        //     const params = username ? { username } : {};
        //     return Book.find(params).sort({ createdAt: -1 });
        // },
        // book: async (parent, { _id }) => {
        //     return Book.findOne({ _id });
        // },

    Mutation: {

        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return {token, user};
        },

        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, args, context) => {
            if (context.user) {

                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args.input } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in.');
        },

        deleteBook: async (parent, args, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: args.bookId } } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        }
    }
};

module.exports = resolvers;