import db from "../../models/index";

const createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address
            });

            resolve("create new user success");
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    createNewUser
};
const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true
            });

            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};
const deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            });

            if (!user) {
                resolve("User not found");
            }

            await user.destroy();
            resolve("Delete success");

        } catch (e) {
            reject(e);
        }
    });
};
const updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            });

            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                await user.save();
                resolve();
            } else {
                resolve();
            }

        } catch (e) {
            reject(e);
        }
    });
};