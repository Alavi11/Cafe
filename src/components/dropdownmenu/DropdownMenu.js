import React from 'react'
import "./DropdownMenu.css"

const DropdownMenu = () => {
  return <>
        <div className="dropdownmenu">
            <ul className="dropdownmenu-1">
                <div className="dropdownmenu-2">
                    <p>غذای گرم</p>
                    <div className="dropdownmenu-3">
                        <ul>
                            <li>پیتزا</li>
                            <li>همبرگر</li>
                            <li>ژامبن</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownmenu-2">
                    <p>نوشیدنی گرم</p>
                    <div className="dropdownmenu-3">
                        <ul>
                            <li>قهوه</li>
                            <li>نسکافه</li>
                            <li>لاته</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownmenu-2">
                    <p>نوشیدنی سرد</p>
                    <div className="dropdownmenu-3">
                        <ul>
                            <li>موهیتو</li>
                            <li>فراپه</li>
                            <li>آگوا فرسکا</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownmenu-2">
                    <p>دسر</p>
                    <div className="dropdownmenu-3">
                        <ul>
                            <li>آیسپک</li>
                            <li>ژله</li>
                            <li>کیک بستنی</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownmenu-2">
                    <p>کیک و شیرینی</p>
                    <div className="dropdownmenu-3">
                        <ul>
                            <li>باقلوا</li>
                            <li>رولت</li>
                            <li>کیک صبحانه</li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownmenu-2"><p>تنقلات</p></div>
            </ul>
        </div>
  </>
}

export default DropdownMenu ;