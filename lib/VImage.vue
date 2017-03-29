<template lang="html">
    <div class="vue-image-box">
        <img v-show="status === 3" v-bind:src="imgUrl" v-bind:alt="alt" ref="img">
        <div v-show="status === 2" class="center-table">
            <div class="center-table-cell">
                <div class="img-loading-animation"></div>
            </div>
        </div>
        <div v-show="status === 1" class="center-table">
            <div class="center-table-cell backup-img">
                404
            </div>
        </div>
    </div>
</template>

<script>
    const props = {
        src: {
            required: true,
            default: "",
            type: String
        },
        prefix: {
            required: false,
            default: "",
            type: String
        },
        alt: {
            required: false,
            default: "",
            type: String
        }
    }
    export default {
        props,
        data () {
            return {
                status: 1,      // 1: no image, 2: loading image, 3: succeed
            }
        },
        computed: {
            imgUrl () {
                return this.src + "" + this.prefix;
            }
        },
        mounted() {
            console.log( this.$refs['img']);
            let el = this.$refs['img'];
            console.log( el );
        },
        methods: {
            getImage () {
                let el = this.$refs['img'];
                if ( !el || !el instanceof Element ) return;
                el.src = this.src || "";
            }
        }
    }
</script>

<style lang="sass-loader" scoped>
    .vue-image-box {
        display: inline-block;

    }

    .img-loading-animation {
        position: relative;
        // height: 20px;
        &:after {
            // position: absolute;
            display: block;
            // left: 0;
            // top: 0;
            content: "";
            margin-left: auto;
            margin-right: auto;
            width: 24px;
            height: 24px;
            border: 4px solid #aaa;
            border-bottom-color: transparent;
            border-radius: 50%;
            animation: rotate1 1s infinite linear;
        }
    }

    /*居中方案*/
    .center-table {
        display: table;
        width: 100%;
        height: 100%;
        .center-table-cell {
            width: 100%;
            height: 100%;
            display: table-cell;
            vertical-align: middle;
            text-align: center;
        }
    }


    img {
        display: block;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
    }

    .backup-img {
        background: url('./backup.jpeg') no-repeat;
        background-position: center;
        background-size: cover;
        color: #eee;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
        font-size: 20px;
    }
</style>
