const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
   explorers.forEach(names => console.log(names.name))//Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   explorers.forEach(stacks => console.log(stacks["stack"]))//Imprime el stack de cada explorer, usa FOR EACH

   const stack_array = explorers.map(function(stack){return stack["stack"]})
   console.log(stack_array)//Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

   const explorersJS = stack_array.filter((stacks) => 
    stacks.includes('js'))
   console.log(explorersJS)//Obtén la lista de explorers que tengan en su stack "js", usa FILTER

   const CDMX = explorers.find((CDMX) => CDMX.city === 'CDMX')
   console.log(CDMX)//Busca el primer explorer que sea de la CDMX, usa FIND

   const suma_exercides_completed = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)

   console.log(suma_exercides_completed)//Obtén la suma de todos los exercises_completed, usa REDUCE

   const exercisesFinishedTrue = explorers.some(item =>item.missions.frontend.exercisesFinished === true)
   console.log(exercisesFinishedTrue)

   const isFinishedTrue = explorers.every((finish) => typeof finish.missions.onboarding.isFinished === true)
   console.log(isFinishedTrue)