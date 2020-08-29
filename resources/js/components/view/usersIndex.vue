 <template>
    <div class="users">
        <div class="loading" v-if="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <ul v-if="users">
            <li v-for="{ name, position, salary, jobStatus, status, duration } in users">
                <strong>Name:</strong> {{ name }},
                <strong>position:</strong> {{ position }}
                <strong>salary:</strong> {{ salary }},
                <strong>jobStatus:</strong> {{ jobStatus }}
                <strong>status:</strong> {{ status }},
                <strong>yearLength:</strong> {{ yearLength }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            loading: false,
            users: null,
            error: null,
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            this.error = this.users = null;
            this.loading = true;
            axios
                .get('/api/users')
                .then(response => {
                    console.log(response);
                });
        }
    }
}
</script>
