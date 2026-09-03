type User = {
    name: string;
};

type Admin = {
    role: string;
};

type AdminUser = User & Admin;

function printUser(user: AdminUser) {
    console.log(user.name);
    console.log(user.role);
}

printUser({
    name: "CK",
    role: "Admin"
});


export{}