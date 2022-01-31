<template>
    <div class="test">
        <input type="text" v-model="title"><br />
        <h1>{{title}}</h1>
        <p v-if="showName">{{user.firstName}}</p>
        <p v-else>Nobody</p>

        <ul>
            <li v-for="(item, index) in items" :key="index">{{item.title}}</li>
        </ul>
        <button v-on:click="greet('hello world!')">Say Greeting</button><br />
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr />
        <label>First name: </label><input type="text" v-model="user.firstName">
        <label>Last name: </label><input type="text" v-model="user.lastName">
        <h3>{{fullName}}</h3>
        <h2>{{msg}}</h2>
    </div>
</template>

<script>
    export default {
        name: "test",
        props: {
            msg: {
                type: String,
                default: "Foobar"
            }
        },
        data() {
            return {
                title: "Hello world",
                user: {
                    firstName: "John",
                    lastName: "Dough"
                },
                showName: true,
                items: [
                    {title: "Item 1"},
                    {title: "Item 2"},
                    {title: "Item 3"},
                ]
            }
        },
        methods: {
            greet: msg =>{
                alert(msg)
            },
            pressKey: e => {
                console.log(e.target.value)
            },
            enterHit: () => {
                console.log("You hit enter")
            }
        },
        computed: {
            fullName: function () {
                return `${this.user.firstName} ${this.user.lastName}`
            }
        }
    }
</script>

<style scoped></style>