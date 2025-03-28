import { defineStore } from 'pinia';

export const useEmployeeStore=defineStore('employeeStore',{
    state:()=>({
        employees:[
            {id:100,nom:'maram',mail:'maram@test',age:20,password:'test',genre:'femme',interets:['musique']},
            {id:102,nom:'assia',mail:'assia@test',age:25,password:'test',genre:'femme',interets:['sport']},
            {id:103,nom:'yassine',mail:'yassine@test',age:30,password:'test',genre:'homme',interets:['sport']}, 

        ],
        nextID:104,
    }),
    getters:{
        getEmployeeById(state){
            return (id)=>{
                return state.employees.find((employee)=>employee.id===Number(id));
            }
        }
    },
    actions:{
        addEmployee(employee){
            const newEmployee={
                ...employee,
                id:this.nextID,
            };
            this.employees.push(newEmployee);
            this.nextID++;
        },
        editEmployee(id, updatedEmployee) {
            const index=this.employees.findIndex(
                (employee)=>employee.id==Number(id)
            );
            if(index!==-1){
                this.employees[index]={...this.employees[index],...updatedEmployee};
            }

        },
        deleteEmployee(id) {
            const index=this.employees.findIndex(
                (employee)=>employee.id==Number(id)
            )
            this.employees.splice(index, 1);
        },
        
        

    },
});