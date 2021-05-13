export function getBranches(){
    const DATA = [
        {
          index: 0,
          id: "ho-chi-minh",
          city: "Ho Chi Minh",
          address: "Tan Binh, Ho Chi Minh",
          imageUrl: "/images/our-services/pic1.jpg",
          position: { lat: 10.762622, lng: 106.660172 }
        },
        {
          index: 1,
          id: "da-nang",
          city: "Da Nang",
          address: "Son Tra, Da Nang",
          imageUrl: "/images/our-services/pic1.jpg",
          position: { lat: 16.047079, lng: 108.206230 }
        },
        {
          index: 2,
          id: "ha-noi",
          city: "Ha Noi",
          address: "Ba Dinh, Ha Noi",
          imageUrl: "/images/our-services/pic1.jpg",
          position: { lat: 21.028511, lng: 105.804817 }
        },
        {
          index: 3,
          id: "can-tho",
          city: "Can Tho",
          address: "Ninh Kieu, Can Tho",
          imageUrl: "/images/our-services/pic1.jpg",
          position: { lat: 10.045162, lng: 105.746857 }
        }
      ]
    return DATA
}
export function getAllBranchesId(){
  const DATA = [
    {
      index: 0,
      id: "ho-chi-minh",
      city: "Ho Chi Minh",
      address: "Tan Binh, Ho Chi Minh",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 10.762622, lng: 106.660172 }
    },
    {
      index: 1,
      id: "da-nang",
      city: "Da Nang",
      address: "Son Tra, Da Nang",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 16.047079, lng: 108.206230 }
    },
    {
      index: 2,
      id: "ha-noi",
      city: "Ha Noi",
      address: "Ba Dinh, Ha Noi",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 21.028511, lng: 105.804817 }
    },
    {
      index: 3,
      id: "can-tho",
      city: "Can Tho",
      address: "Ninh Kieu, Can Tho",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 10.045162, lng: 105.746857 }
    }
  ]
    return DATA.map(DATA => {
      return {
        params: {
          id: DATA.id
        }
      }
    })
}

export function getAllBranchesDetails(id){
  const DATA = [
    {
      index: 0,
      id: "ho-chi-minh",
      city: "Ho Chi Minh",
      address: "Tan Binh, Ho Chi Minh",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 10.762622, lng: 106.660172 }
    },
    {
      index: 1,
      id: "da-nang",
      city: "Da Nang",
      address: "Son Tra, Da Nang",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 16.047079, lng: 108.206230 }
    },
    {
      index: 2,
      id: "ha-noi",
      city: "Ha Noi",
      address: "Ba Dinh, Ha Noi",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 21.028511, lng: 105.804817 }
    },
    {
      index: 3,
      id: "can-tho",
      city: "Can Tho",
      address: "Ninh Kieu, Can Tho",
      imageUrl: "/images/our-services/pic1.jpg",
      position: { lat: 10.045162, lng: 105.746857 }
    }
  ]
  const dataFiltedById = DATA.filter(DATA => DATA.id === id)
    return {
      dataFiltedById
    }
}