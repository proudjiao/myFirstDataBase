// File Not Used
const pipeline = [
  {
    $match: {
      accommodates: {
        $gt: 4,
      },
      price: {
        $lt: 500,
      },
      amenities: "Hair dryer",
    },
  },
  {
    $sort: {
      price: 1,
    },
  },
  {
    $project: {
      name: 1,
      amenities: 1,
      price: 1,
      iamges: 1,
      description: 1,
    },
  },
  {
    $limit: 20,
  },
];
