function AdminPNewRoom() {
  return (
    <div>
      <h2 className="py-8 font-vazirBold text-2xl text-gray-600">
        افزودن اقامتگاه جدید
      </h2>
      <div className="grid grid-cols-12 gap-5 rounded-md">
        <div className="box-body">
          <form action="#">
            <div className="form-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">نام</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="نام محصول"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">متن خلاصه</label>
                    <input
                      type="text"
                      className="form-control border"
                      placeholder="خلاصه توضیحات"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">دسته بندی</label>
                    <select
                      className="form-select"
                      data-placeholder="Choose a Category"
                      tabIndex={1}
                    >
                      <option value="Category 1">دسته 1</option>
                      <option value="Category 2">دسته 2</option>
                      <option value="Category 3">دسته 5</option>
                      <option value="Category 4">دسته 4</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">وضعیت</label>
                    <div className="radio-list">
                      <div className="radio-inline me-10 p-0">
                        <div className="radio-info radio">
                          <input
                            type="radio"
                            name="radio"
                            id="radio1"
                            value="وضعیت"
                          />
                          <label htmlFor="radio1">منتشر شده</label>
                        </div>
                      </div>
                      <div className="radio-inline me-10 p-0">
                        <div className="radio-info radio">
                          <input
                            type="radio"
                            name="radio"
                            id="radio2"
                            value="وضعیت"
                          />
                          <label htmlFor="radio2">در انتظار</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">قیمت</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="ti-money"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control border"
                        placeholder="270"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">تخفیف</label>
                    <div className="input-group">
                      <div className="input-group-addon">
                        <i className="ti-cut"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control border"
                        placeholder="50%"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">
                      توضیحات محصول
                    </label>
                    <textarea className="p-15 form-control border" rows={4}>
                      توضیحات را براحتی ویرایش کنید
                    </textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">عنوان</label>
                    <input type="text" className="form-control border" />{' '}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="fw-700 fs-16 form-label">
                      کلمات کلیدی
                    </label>
                    <input type="text" className="form-control border" />{' '}
                  </div>
                </div>

                <div className="col-md-4">
                  <h4 className="box-title mt-20">اپلود تصویر</h4>
                  <div className="product-img text-start">
                    <img src="images/product/product-9.png" alt="" />
                    <div className="input-group my-3">
                      <label
                        className="input-group-text btn-primary"
                        htmlFor="inputGroupFile01"
                      >
                        اپلود تصاویر دیگر
                      </label>
                      <input
                        type="file"
                        className="form-control border"
                        id="inputGroupFile01"
                      />
                    </div>
                    <button className="btn btn-success">ویرایش</button>
                    <button className="btn-danger btn">حذف</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="box-title mt-40">توضیحات کلی</h4>
                  <div className="table-responsive">
                    <table className="no-border td-padding table">
                      <tbody>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="برند"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="فروشنده"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="نحوه ارسال"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="بیشتر"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="رنگ"
                            />
                          </td>
                          <td>
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="گیف پک"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-actions mt-10">
              <button type="submit" className="btn btn-primary">
                <i className="fa fa-check"></i> ثبت
              </button>
              <button type="button" className="btn-danger btn">
                لغو
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPNewRoom;
