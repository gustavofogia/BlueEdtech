const filmeflix = [
    {
        id: 1,
        nome: "Interstellar",
        img: "https://www.google.com/search?q=interstellar&sxsrf=AOaemvKJDUF_bIKogu5po83TLrQKla8_ag:1639354892360&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjN7pPwwN_0AhXwGLkGHaUWBocQ_AUoAXoECAIQAw&biw=1920&bih=937&dpr=1#imgrc=DwHuAUKZ6yxJtM&imgdii=bMatIK_BpbPKlM",
        genero: "ficcao" ,
        nota: 10
    },
    {
        id: 2,
        nome: "A Árvore da Vida",
        img: "https://www.google.com/search?q=a+arvore+da+vida+filme&tbm=isch&ved=2ahUKEwirnfCQwt_0AhVvlJUCHU0UALAQ2-cCegQIABAA&oq=a+arvore+da+vida+filme&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAgQHjIECAAQGDIECAAQGDIECAAQGDIECAAQGDIECAAQGDIECAAQGDoHCCMQ7wMQJzoGCAAQBxAeOgQIABAeUIMBWLgVYO4WaABwAHgAgAHZAYgBsQeSAQUwLjYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=XZO2Yev6GO-o1sQPzaiAgAs&bih=937&biw=1920#imgrc=tRDfgDrOLr1_4M",
        genero: "drama",
        nota: 10
    },
    {
        id: 3,
        nome: "A Viagem de Chihiro",
        img: "https://www.google.com/search?q=A+Viagem+de+Chihiro&sxsrf=AOaemvIC5PP7kOPSVIy--4-FlKA-dDhoXA:1639355349947&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwia46zKwt_0AhXlRvEDHfdoCjIQ_AUoAXoECAIQAw&biw=1920&bih=937&dpr=1#imgrc=fJlyC6Pmk_U_gM&imgdii=DOfrFW1LIT6qhM",
        genero: "fantasia",
        nota: 10
    }   
]

const getFilmesService = () => {
    return filmeflix
}

const getFilmesbyIdService = (idParam) => {
    return filmeflix.find((filme) => filme.id == idParam)
}

//cadastra um novo filme (objeto) na lista filmeflix
const addfilme = (newFilme) => {
    //monto um id falso para meu novo filme
    const newId = filmeflix.length + 1;
    newFilme.id = newId;
    //adiciono esse novo filme no array
    filmeflix.push(newFilme);
    return newFilme;
}

const putFilme = (idParam, filmeEdit) => {
    const index = filmeflix.findIndex((filme) => filme.id == idParam)

    if(index >= 0) {
        filmeflix[index] = {
            ...filmeflix[index],
            ...filmeEdit
        }
        return true
    }else {
        return false
    }
}

const deleteFilme = (idParam) => {
    if(!idParam) {
        return
    }
    const index = filmeflix.findIndex((filme) => filme.id == idParam)
    const filmeExcluido = filmeflix[index];
    filmeflix.splice(index, 1)
    return filmeExcluido;
}

module.exports = {
    getFilmesService,
    getFilmesbyIdService,
    addfilme,
    putFilme,
    deleteFilme
}