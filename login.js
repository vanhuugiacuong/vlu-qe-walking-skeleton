/**
 * Kiểm tra thông tin đăng nhập.
 *
 * @param {string} username Tên đăng nhập
 * @param {string} password Mật khẩu
 * @returns {boolean} true nếu thông tin hợp lệ, ngược lại là false
 */
function login(username, password) {
  return username === 'admin' && password === '1234';
}

// Xuất hàm để Jest có thể sử dụng trong môi trường Node.js.
if (typeof module !== 'undefined' && module.exports) {
  module.exports = login;
}
