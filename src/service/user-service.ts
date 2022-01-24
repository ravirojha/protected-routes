import Util from "../util";
import * as faker from 'faker';

const UserService = {
    fetchLoggedInUserDetails: async () => {
        await Util.sleep(2000)
        return {
            name: faker.name.findName(),
            email: faker.internet.email(),
            role: Math.random() > 0.5 ? 'regular' : 'admin'
        }
    }
}

export default UserService;