<template>
    <div>
        <h1>liste</h1>
        <Table :tableData="tableData1" @onDelete="handleDeleteEmployee" @onEdit="handleEdit" />
    </div>
</template>

<script>
import { useEmployeeStore } from '@/store/employees';
import Table from '@/components/Table.vue';
import { mapActions, mapState } from 'pinia';


export default {
    components: {
        Table,
    },
    computed: {
        ...mapState(useEmployeeStore, ['employees']),

        tableData1() {
            return {
                headers: ['nom', 'gmail', 'age', 'genre', 'centre d interet'],
                data: this.employees
                    .filter(emp => emp !== undefined && emp !== null)
                    .map(emp => ({
                        nom: emp.nom,
                        mail: emp.mail,
                        age: emp.age,
                        //password: emp.password,
                        genre: emp.genre,
                        interets: emp.interets ? emp.interets.join(', ') : 'Aucun',
                    }))
            };


        },


    },
    methods: {
        ...mapActions(useEmployeeStore, ['addEmployee', 'deleteEmployee', 'editEmployee']),

        handleEdit(index) {
            this.$router.push(`/edit/${index}`)
        },
        handleDeleteEmployee(index) {

            alert(`Suppression de l'employé a l'index ${index}`);
            this.deleteEmployee(index);

        },


    },
};
</script>
