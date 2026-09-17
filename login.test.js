const login = require('./login');

describe('login', () => {
  test("trả về true khi user='admin' và pass='123'", () => {
    expect(login('admin', '123')).toBe(true);
  });

  test('trả về false khi tên đăng nhập không đúng', () => {
    expect(login('user', '123')).toBe(false);
  });

  test('trả về false khi mật khẩu không đúng', () => {
    expect(login('admin', 'sai-mat-khau')).toBe(false);
  });
});
