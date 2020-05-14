import { uuid } from '@/utils/utils'
export default {
  todos: [
    {
      id: uuid(),
      description: 'Buy new sweatshirt',
      completed: false,
      edit: false
    },
    {
      id: uuid(),
      description: 'Begin promotional phase',
      completed: false,
      edit: false
    },
    {
      id: uuid(),
      description: 'Read an article ',
      completed: false,
      edit: false
    },
    {
      id: uuid(),
      description: 'Go for walk',
      completed: false,
      edit: false
    }
  ]
}
