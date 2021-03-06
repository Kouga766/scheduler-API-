import axios from 'axios';

// バックエンドのURL
// const domain = 'http://35.76.246.150';
const domain = 'http://localhost:8080';


const accessApi = {

    getApi: async function(url) {
        const startTime = Date.now();
        const result = { "data": {}, "status": '' };
        await axios.get(domain + url)
            .then(response => { //then(response) (=>) {} で、{}の中でresponseを使える！
                console.log('status:', response.status); // 200
                console.log('body:', response.data);     // response body.
                result.data = response.data;
                result.status = response.status;
            }).catch(err => { // catchでエラー時の挙動を定義する
                console.log('err:', err);
            })
        const endTime = Date.now();
        const waitTime = 500 - (endTime - startTime);
        if (waitTime > 0) {
            await this.sleep(waitTime);
        }
        return result
    },

    postApi: async function(url, postData) {
        const startTime = Date.now();
        await axios
            .post(domain + url, postData, { headers: { 'content-type': 'application/json' } })
            .then(response => {
                console.log(response.data);
            }).catch( err => {
                console.log('err', err);
            });
        const endTime = Date.now();
        const waitTime = 500 - (endTime - startTime);
        if (waitTime > 0) {
            await this.sleep(waitTime);
        }
    },

    putApi: async function(url, putData) {
        const startTime = Date.now();
        await axios
            .put(domain + url, putData, { headers: { 'content-type': 'application/json' } })
            .then(response => {
                console.log(response.data);
            }).catch(err => {
                console.log('err', err);
            });
        const endTime = Date.now();
        const waitTime = 500 - (endTime - startTime);
        if (waitTime > 0) {
            await this.sleep(waitTime);
        }
    },

    deleteApi: async function(url) {
        const startTime = Date.now();
        await axios
            .delete(domain + url)
            .then(response => {
                console.log(response.data);
            }).catch( err => {
                console.log('err', err);
            });
        const endTime = Date.now();
        const waitTime = 500 - (endTime - startTime);
        if (waitTime > 0) {
            await this.sleep(waitTime);
        }
    },

    // sleepの書き方！
    sleep: async function (time) {
        await new Promise(resolve => setTimeout(resolve, time))
        return
    },

}

export default accessApi