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
            if (!this.employees || this.employees.length === 0) {
                return { headers: [], data: [] };
            }

            const headers = [
                { label: "Nom", value: "nom" },
                { label: "E - mail", value: "mail" }
            ];

            const data = this.employees.map(emp => {
                const row = {};
                headers.forEach(header => {
                    row[header.value] = emp.hasOwnProperty(header.value) ? emp[header.value] : '---';
                });
                return row;
            });

            return { headers, data };
        }



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
