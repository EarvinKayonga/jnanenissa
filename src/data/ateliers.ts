import thes from '../assets/photos/the-infusion.jpg';
import infusions from '../assets/photos/epices-bols.jpg';
import miel from '../assets/photos/miel-lavande.jpg';
import assiette from '../assets/photos/huiles-aromatisees.jpg';
import distillation from '../assets/photos/alambic-cuivre.jpg';

export const ateliers = [
  {
    id: 'thes',
    image: thes,
    title: 'Explorer les rituels des thés marocains',
    lead: 'Concocte et voyage autour des thés marocains.',
    steps: [
      "Histoire de l'arrivée du thé vert au Maroc",
      'Voyage autour des plantes qui parfument les thés, et choix d’une plante pour parfumer le vôtre',
      'Les manières de préparer le thé selon les régions, ses rôles culturels et sociaux',
      'La place des femmes dans la valorisation des thés',
      'Choix de votre théière et préparation individuelle d’un thé marocain',
      'Dégustation accompagnée d’un plateau de spécialités marocaines',
    ],
    gift: 'Petit cadeau de départ',
  },
  {
    id: 'infusions',
    image: infusions,
    title: 'Le Maroc en infusion',
    lead: 'Une terre aux mille saveurs : fabrique et explore les bienfaits des tisanes marocaines.',
    steps: [
      'La place des femmes dans la valorisation des plantes : cueillette, tri et séchage solaire',
      'Introduction à la pharmacopée marocaine',
      'Découverte des jardins marocains, des plantes à parfum aux fruits des vergers',
      'Composition de votre propre tisane de plantes, d’épices et de fruits séchés',
      'Dégustation de vos tisanes et d’un plateau de spécialités marocaines',
    ],
    gift: 'Petit cadeau de départ',
  },
  {
    id: 'miel',
    image: miel,
    title: "Voyage au cœur de l'apiculture marocaine",
    lead: 'Fabrique ton miel et découvre les secrets du miel marocain.',
    steps: [
      "Méthodes traditionnelles d'apiculture et étapes de fabrication du miel",
      'La place du miel au Maroc, de la pharmacopée à la gastronomie',
      'Dégustation de miels typiquement marocains, leurs usages et bienfaits',
      'Voyage sensoriel autour des plantes à parfum et aromatiques qui parfument les miels',
      'Confection de votre propre miel parfumé de plantes ou de fleurs',
      'Plateau de spécialités sucrées et/ou salées à base de miel, avec un thé marocain',
    ],
    gift: 'Petit cadeau de départ',
  },
  {
    id: 'assiette',
    image: assiette,
    title: 'Le Maroc dans votre assiette',
    lead: 'Confection d’une huile pour parfumer vos plats.',
    steps: [
      "Voyage autour de la culture de l'olive au Maroc",
      "La place des femmes dans l'agriculture de l'olive, la transmission et la sauvegarde des savoir-faire",
      'Découverte des épices et des herbes aromatiques qui agrémentent les plats',
      'À vos pilons et mortiers pour préparer les épices et confectionner votre huile',
      'Partage autour d’un plateau de spécialités salées issues du terroir marocain',
    ],
    gift: 'Petit cadeau de départ',
  },
  {
    id: 'distillation',
    image: distillation,
    title: 'Les rituels de la distillation traditionnelle',
    lead: 'Fabrique ton huile de soin.',
    steps: [
      'Voyage autour des plantes à parfum et aromatiques marocaines',
      'La place des femmes dans la distillation et la valorisation des plantes',
      "Les procédés de distillation, de l'espace domestique aux coopératives",
      'Rétrospective de la place du Maroc dans la parfumerie mondiale',
      'Choix de votre huile végétale, huile essentielle et plantes séchées, puis confection de votre huile personnalisée',
      'Cérémonie du thé et dégustation de spécialités marocaines',
    ],
    gift: 'Petit cadeau de départ',
  },
];
