import App from './lib/app';
import Router from './lib/router';

import todoComponent from './components/todoComponent';
import mainComponent from './components/mainComponent';

const app = new App("#todoApp");


app.addComponent(mainComponent);
app.addComponent(todoComponent);

const router = new Router(app);
router.addRoute('mainComponent', '^#?$')
router.addRoute('todoComponent', '^#/todos$')

// init
app.showComponent("mainComponent");