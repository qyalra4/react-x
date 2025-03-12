import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/AuthPage.css';

const AuthPage = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    code: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^05\d{8}$/;

    if (!isLogin) {
      if (!formData.firstName) newErrors.firstName = 'يجب إدخال الاسم الأول';
      if (!formData.lastName) newErrors.lastName = 'يجب إدخال الاسم الأخير';
      if (!formData.address) newErrors.address = 'يجب إدخال العنوان';
    }

    if (!formData.email) newErrors.email = 'يجب إدخال البريد الإلكتروني';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'بريد إلكتروني غير صالح';

    if (!formData.phone) newErrors.phone = 'يجب إدخال رقم الجوال';
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = 'رقم جوال غير صالح (05xxxxxxxx)';

    if (!isLogin && !formData.code) newErrors.code = 'يجب إدخال رمز التحقق';

    if (!formData.password) newErrors.password = 'يجب إدخال كلمة المرور';
    else if (formData.password.length < 8) newErrors.password = 'كلمة المرور يجب أن تكون 8 أحرف على الأقل';

    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'كلمتا المرور غير متطابقتين';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // هنا يمكنك إضافة منطق إرسال البيانات إلى الخادم
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className='h222'>{isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h2>
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>الاسم الأول:</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <span className="error">{errors.firstName}</span>}
              </div>

              <div className="form-group">
                <label>الاسم الأخير:</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <span className="error">{errors.lastName}</span>}
              </div>
            </>
          )}

          <div className="form-group">
            <label>البريد الإلكتروني:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>رقم الجوال:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="05xxxxxxxx"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          {!isLogin && (
            <>
              <div className="form-group">
                <label>العنوان:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && <span className="error">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label>رمز التحقق:</label>
                <div className="code-section">
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    maxLength="6"
                  />
                  <button type="button" className="send-code-btn">
                    إرسال الرمز
                  </button>
                </div>
                {errors.code && <span className="error">{errors.code}</span>}
              </div>
            </>
          )}

          <div className="form-group">
            <label>كلمة المرور:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>تأكيد كلمة المرور:</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
          </button>
        </form>

        <div className="auth-switch">
          {isLogin ? (
            <>
              ليس لديك حساب؟ <Link to="/signup">أنشئ حساب جديد</Link>
            </>
          ) : (
            <>
              لديك حساب بالفعل؟ <Link to="/login">سجل الدخول هنا</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;