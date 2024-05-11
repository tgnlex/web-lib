function getUserAccount() {
    return axios.get('/user/12345')
}
function getUserPermissions() {
    return axios.get('/user/12345/permissions');
}, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

const [acct, perm] = await Promise.all([getUserAccount, getUserPermissions()]);