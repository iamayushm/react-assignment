var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, address, phone) {
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, address, phone, employeeDetails) {
        var _this = _super.call(this, name, address, phone) || this;
        _this.printEmployeeDetails = function () {
            console.log("name ".concat(_this.name, " employeeCode ").concat(_this.EmployeeCode));
        };
        _this.EmployeeCode = employeeDetails.EmployeeCode;
        _this.department = employeeDetails.department;
        return _this;
    }
    return Employee;
}(User));
var employeeDetail = {
    EmployeeCode: "a104",
    department: "software"
};
var employee = new Employee("Ayush", "Bhopal", "8085157", employeeDetail);
employee.printEmployeeDetails();
