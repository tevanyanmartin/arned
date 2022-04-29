import {db} from '..';

const firestoreSvc = {
    async getUsers(){
        return db.collection('users').get();
    }
}