export function getBeautyServices(){
  const DATA = [
    {
      index: 0,
      imageUrl: "/images/blog/grid/pic1.jpg",
      title: "Body Treatments",
      id:"body-treatments",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "haircuts",
    },
    {
      index: 1,
      imageUrl: "/images/blog/grid/pic2.jpg",
      title: "Massages",
      id:"massages",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "haircuts",
    },
    {
      index: 2,
      imageUrl: "/images/blog/grid/pic3.jpg",
      title: "Organic Kulk Service",
      id:"organic-kulk-service",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "coloring",
    },
    {
      index: 3,
      imageUrl: "/images/blog/grid/pic4.jpg",
      title: "Hair Makeup",
      id:"hair-makeup",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "makeup",
    },
    {
      index: 4,
      imageUrl: "/images/blog/grid/pic5.jpg",
      title: "Beauty & Clinic Service",
      id:"beauty-clinic-service",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "massage",
    },
    {
      index: 5,
      imageUrl: "/images/blog/grid/pic6.jpg",
      title: "Aromatherapy",
      id:"aromatherapy",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "highlights",
    },
  ]
      return DATA
}

export function getCategoryServices(){
    const CATEGORY = [
        {
          index: 0,
          categoryName: "haircuts",
        },
        {
          index: 1,
          categoryName: "coloring",
        },
        {
          index: 2,
          categoryName: "makeup",
        },
        {
          index: 3,
          categoryName: "massage",
        },
        {
          index: 4,
          categoryName: "highlights",
        },
      ]

      return CATEGORY
}

export function getAllServicesDetails(id){
  const DATA = [
    {
      index: 0,
      imageUrl: "/images/blog/grid/pic1.jpg",
      title: "Body Treatments",
      id:"body-treatments",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "haircuts",
    },
    {
      index: 1,
      imageUrl: "/images/blog/grid/pic2.jpg",
      title: "Massages",
      id:"massages",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "haircuts",
    },
    {
      index: 2,
      imageUrl: "/images/blog/grid/pic3.jpg",
      title: "Organic Kulk Service",
      id:"organic-kulk-service",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "coloring",
    },
    {
      index: 3,
      imageUrl: "/images/blog/grid/pic4.jpg",
      title: "Hair Makeup",
      id:"hair-makeup",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "makeup",
    },
    {
      index: 4,
      imageUrl: "/images/blog/grid/pic5.jpg",
      title: "Beauty & Clinic Service",
      id:"beauty-clinic-service",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "massage",
    },
    {
      index: 5,
      imageUrl: "/images/blog/grid/pic6.jpg",
      title: "Aromatherapy",
      id:"aromatherapy",
      description: "Lorem Ipsum is simply dummy text of the printing.",
      category: "highlights",
    },
  ]
  const dataFiltedById = DATA.filter(DATA => DATA.id === id)
    return {
      dataFiltedById
    }
}