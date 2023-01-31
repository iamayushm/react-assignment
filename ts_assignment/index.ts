class User {
    name: string
    address: string
    phone: string
    constructor(name: string, address:string, phone: string){
        this.name=name
        this.address=address
        this.phone=phone
    }
}

interface employeeDetails{
    EmployeeCode: string
    department: string
    printEmployeeDetails?: Function 
}

class Employee extends User implements employeeDetails{
    EmployeeCode: string
    department: string

    constructor(name: string, address: string, phone:string, employeeDetails: employeeDetails){
        super(name, address, phone)
        this.EmployeeCode = employeeDetails.EmployeeCode
        this.department = employeeDetails.department
    }

    printEmployeeDetails = ()=>{
        console.log(`name ${this.name} employeeCode ${this.EmployeeCode}`)
    }
}

let employeeDetail: employeeDetails = {
    EmployeeCode: "a104",
    department: "software"
}


let employee = new Employee ("Ayush", "Bhopal", "8085157", employeeDetail)

employee.printEmployeeDetails()