<template>
    <table>
        <thead>
            <tr>
                <th v-for="(header, index) in tableData.headers" :key="index">{{ header }}</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, i) in tableData.data" :key="i">
                <td v-for="(cell, index) in Object.values(row)" :key="index">{{ cell }}</td>
                <td>
                    <div style="display: flex; justify-content: space-between;width: 150px;">
                        <button @click="handleEdit(i)">Modifier</button>
                        <button @click="handleDelete(i)">Supprimer</button>

                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

export default {
    props: {
        tableData: {
            headers: Array,
            data: Array
        },

    },
    data() {
        return {
            selectedIndex: null,
        }
    },
    methods: {


        handleDelete(index) {
            this.$emit('onDelete', index);
        },
        handleEdit(index) {
            this.$emit('onEdit', index);
        }
    }
}
</script>


<style>
th {
    text-transform: capitalize;
    background-color: #ddd;
}

td,
th {
    border-bottom: 1px solid #ccc;
    padding: 5px 20px;
}
</style>
