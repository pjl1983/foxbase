import { DecisionTreeModel, DecisionTypeEnum, InputTypeEnum } from './models/decision-tree.model';

export const DecisionTree: DecisionTreeModel[] = [
  {
    id: '1',
    text: 'Which cuisine do you prefer?',
    type: DecisionTypeEnum.QUESTION,
    previous: '1',
    inputType: InputTypeEnum.RADIO,
    options: [
      {
        answer: 'mediterranean',
        route: '2A'
      },
      {
        answer: 'Asian',
        route: '2B'
      },
      {
        answer: 'German',
        route: '2C'
      }
    ]
  },
  {
    id: '2A',
    text: 'Do you like a lot of sauce on your food?',
    type: DecisionTypeEnum.QUESTION,
    previous: '1',
    inputType: InputTypeEnum.BUTTON,
    options: [
      {
        answer: 'Yes',
        route: '3A'
      },
      {
        answer: 'No',
        route: '3B'
      }
    ]
  },
  {
    id: '2B',
    text: 'Are you in the mood for fish?',
    type: DecisionTypeEnum.QUESTION,
    previous: '1',
    inputType: InputTypeEnum.BUTTON,
    options: [
      {
        answer: 'Yes',
        route: '3C'
      },
      {
        answer: 'No',
        route: '3D'
      }
    ]
  },
  {
    id: '2C',
    text: 'Do you like Schnitzel?',
    type: DecisionTypeEnum.QUESTION,
    previous: '1',
    inputType: InputTypeEnum.BUTTON,
    options: [
      {
        answer: 'Yes',
        route: '4I'
      },
      {
        answer: 'No',
        route: '1'
      }
    ]
  },
  {
    id: '3A',
    text: 'Are you in the mood for eating noodles?',
    type: DecisionTypeEnum.QUESTION,
    previous: '2A',
    inputType: InputTypeEnum.RADIO,
    options: [
      {
        answer: 'No',
        route: '4A'
      },
      {
        answer: 'Yes',
        route: '4B'
      }
    ]
  },
  {
    id: '3B',
    text: 'Choose one of the following',
    type: DecisionTypeEnum.QUESTION,
    previous: '2A',
    inputType: InputTypeEnum.RADIO,
    options: [
      {
        answer: 'Without pork',
        route: '4C'
      },
      {
        answer: 'With pork',
        route: '4D'
      }
    ]
  },
  {
    id: '3C',
    text: 'Raw or cooked?',
    type: DecisionTypeEnum.QUESTION,
    previous: '2B',
    inputType: InputTypeEnum.BUTTON,
    options: [
      {
        answer: 'Raw',
        route: '4E'
      },
      {
        answer: 'Cooked',
        route: '4F'
      }
    ]
  },
  {
    id: '3D',
    text: 'Do you like spicy food?',
    type: DecisionTypeEnum.QUESTION,
    previous: '2B',
    inputType: InputTypeEnum.BUTTON,
    options: [
      {
        answer: 'Yes',
        route: '4G'
      },
      {
        answer: 'No',
        route: '4H'
      }
    ]
  },
  {
    id: '4A',
    text: 'I recommend pizza!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3A',
    inputType: InputTypeEnum.NONE,
    image: 'https://www.kuechengoetter.de/uploads/media/1800x1200/02/4282-pizza-margherita.jpg?v=1-0'
  },
  {
    id: '4B',
    text: 'I recommend a pasta dish!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3A',
    inputType: InputTypeEnum.NONE,
    image: 'https://img.taste.com.au/9Rr43HzQ/w1200-h630-cfill/taste/2016/11/pasta-with-simple-tomato-sauce-21073-1.jpeg'
  },
  {
    id: '4C',
    text: 'I recommend döner!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3B',
    inputType: InputTypeEnum.NONE,
    image: 'https://www.chefsculinar.de/chefsculinar/ds_img/assets_400/2014-09-09-Doener3-690x460.jpg'
  },
  {
    id: '4D',
    text: 'I recommend Greek!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3B',
    inputType: InputTypeEnum.NONE,
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/feta2-4f917ca.jpg?quality=90&lb=700,350&background=white'
  },
  {
    id: '4E',
    text: 'I recommend sushi!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3C',
    inputType: InputTypeEnum.NONE,
    image: 'https://hnxo-prod.imgix.net/2020/09/kiekmo-fuenf-mal-sushi-in-bahrenfeld_wordpress.jpg?fit=crop&w=800&h=450&auto=format&auto=compress'
  },
  {
    id: '4F',
    text: 'I recommend seafood!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3C',
    inputType: InputTypeEnum.NONE,
    image: 'https://media.istockphoto.com/photos/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-picture-id1305699663?k=6&m=1305699663&s=612x612&w=0&h=xoKWmYbAeiv6Vac-5w4Tc5ziln3V3KQkSNlTEhMBxn0='
  },
  {
    id: '4G',
    text: 'I recommend eating Indian curry!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3D',
    inputType: InputTypeEnum.NONE,
    image: 'https://i0.wp.com/lakesandlattes.com/wp-content/uploads/2020/05/Easy-Indian-style-butter-chicken-curry-recipe.jpg?resize=500%2C375&ssl=1'
  },
  {
    id: '4H',
    text: 'I recommend chinese!',
    type: DecisionTypeEnum.ANSWER,
    previous: '3D',
    inputType: InputTypeEnum.NONE,
    image: 'https://media.istockphoto.com/photos/asian-oranage-chicken-with-green-onions-picture-id483120255?k=6&m=483120255&s=612x612&w=0&h=H9m0_Ky_grAGA60D947n5TCVSCk_82sNPDTYJSYy6Fk='
  },
  {
    id: '4I',
    text: 'I recommend jägerschnitzel!',
    type: DecisionTypeEnum.ANSWER,
    previous: '2C',
    inputType: InputTypeEnum.NONE,
    image: 'https://i3-img.sat1.de/pis/ezone/f61cqgELB38wdEB0AB1fHPDQCtTDCJ4UYl_Ic-IXCoYylZ0mXauk1M9wuU4rv5_rLEYRvbq7E9XZDDfMHZWh6xm0ZycUvSmJIa8sKUgIhn2Bnedt9u8xQTHOEcZMRyqVZZ_y32ZYicFi0YfsVkgGNDTzRYMjGGzNAz6YJwQUVYrWGzTcf4XIZgiSKKJfaF39-Xku4E7rjuAi04rjgRd2qyGlarLcDobGKoAYdhJGqa18yo4o6NyAMojuFYo43ntWctWkMNlM/profile:mag-996x562'
  }
];
