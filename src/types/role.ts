/* eslint-disable no-shadow */
enum E_ROLE {
    CLIENT = 'client',
    FREELANCER = 'freelancer'
}

type TRole = E_ROLE.CLIENT | E_ROLE.FREELANCER

export {
    E_ROLE,
    TRole
};
