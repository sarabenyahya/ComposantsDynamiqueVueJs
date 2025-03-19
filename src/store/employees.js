import { defineStore } from 'pinia';

export const useEmployeeStore=defineStore('employeeStore',{
    state:()=>({
        employees:[
            {nom:'maram',mail:'maram@test',age:20,password:'test',genre:'femme',interets:['musique']},
            {nom:'assia',mail:'assia@test',age:25,password:'test',genre:'femme',interets:['sport']},
            {nom:'yassine',mail:'yassine@test',age:30,password:'test',genre:'homme',interets:['sport']}, 

        ],
        departements:[
            {id:1,name:'informatique'},
            {id:2,name:'comptabilite'}, 
            {id:3,name:'marketing'},
        ]
    }),
    actions:{
        addEmployee(employee){
            this.employees.push(employee)
        },
        editEmployee(index, updatedEmployee) {
            this.employees[index] = updatedEmployee;
        },
        deleteEmployee(index) {
            this.employees.splice(index, 1);
        },
        updatedEmployee(index,newData){
            this.employees[index]={...this.employees[index],...newData}
        }
        

    },
});