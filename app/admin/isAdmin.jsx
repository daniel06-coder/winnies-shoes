export const ADMIN_EMAILS = [
    "anyanwud898@gmail.com",
    "winifredobianuju53@gmail.com"
];

export const isAdmin = (session) => {
    return ADMIN_EMAILS.includes(session?.user?.email)
}