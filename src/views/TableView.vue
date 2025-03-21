<template>
    <div>
        <h1>Liste des employés</h1>
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
                headers: ['id', 'nom', 'gmail', 'age', 'genre', 'centre d interet'],
                data: this.employees
                    .map(emp => ({
                        id: emp.id,
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

        handleEdit(id) {
            this.$router.push({ name: 'editForm', params: { id } });
        },
        handleDeleteEmployee(id) {

            alert(`Suppression de l'employé a l'index ${id}`);
            this.deleteEmployee(id);

        },


    },
};
</script>
