'use strict'

const Route = use('Route')

Route.get('/', 'HomeController.index')
Route.get('/nations/:id', 'HomeController.nations')
Route.get('/vehicles/:id', 'HomeController.vehicles')
Route.get('/guns', 'HomeController.guns')
Route.get('/turrets', 'HomeController.turrets')
Route.get('/engines', 'HomeController.engines')
Route.get('/radios', 'HomeController.radios')
Route.get('/suspensions', 'HomeController.suspensions')

Route.get('/tanks/:id', 'TanksController.show')

Route.get('/login', 'AccountsController.login')
Route.get('/register', 'AccountsController.register')

Route.get('/logout', 'UsersController.logout')
Route.post('/login', 'UsersController.login')
Route.post('/register', 'UsersController.register')

Route.group('admin', () => {
  Route.get('/', 'AdminController.index')

  Route
  .resource('files', 'FilesController')
  .except('update', 'show', 'edit')

  setResources([
    { name: 'nations', controller: 'NationsController' },
    { name: 'vehicles', controller: 'VehiclesController' },
    { name: 'shellTypes', controller: 'ShellTypesController' },
    { name: 'guns', controller: 'GunsController' },
    { name: 'turrets', controller: 'TurretsController' },
    { name: 'engines', controller: 'EnginesController' },
    { name: 'radios', controller: 'RadiosController' },
    { name: 'suspensions', controller: 'SuspensionsController' },
    { name: 'ammos', controller: 'AmmosController' },
    { name: 'bodies', controller: 'BodiesController' },
    { name: 'crews', controller: 'CrewsController' },
    { name: 'equipment', controller: 'EquipmentController' },
    { name: 'consumables', controller: 'ConsumablesController' }
  ])
}).prefix('admin').middleware('auth')


function setResources(data) {
  for(let i = 0; i < data.length; i++) {
    setResource(data[i].name, data[i].controller)
  }
}

function setResource(name, controller) {
  Route
  .resource(name, controller)
  .except('create', 'show', 'edit')
  .addCollection('get/:id', 'POST', (collection) => {
    collection.bindAction(`${controller}.get`)
  })
}
