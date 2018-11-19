const { models } = require('cozy-konnector-libs')
// const MaifUser = module.exports = models.baseModel.createNew({'displayName':'fr.maif.maifuser'});

const doctypeContrat = models.baseModel.createNew({
  displayName: 'contrat',
  docType: 'fr.maif.maifuser.contrat',
  docTypeVersion: 'MaifKonnector-0.0.0-draft',
  societaire: '1234567N',
  name: 'fr.maif.maifuser.contrat',
  vendor: 'Maif',
  formuleBase: 'VAM Assistance panne 0km',
  startDate: '1989-04-29',
  montantTarifTtc: 312,
  objects: [
    {
      startDate: '2013-04-12T00:00:00',
      lieu: [
        {
          address: {
            street: '2 BOULEVARD DES BELGES',
            postCode: '69006',
            city: 'LYON',
            country: 'FRANCE',
            numeroPays: '000'
          }
        }
      ]
    }
  ]
})

const doctypeHome = models.baseModel.createNew({
  displayName: 'home',
  docType: 'fr.maif.maifuser.home',
  name: 'fr.maif.maifuser.home',
  address: {
    street: '2 BOULEVARD DES BELGES',
    postCode: '69006',
    city: 'LYON',
    country: 'FRANCE',
    numeroPays: '000'
  },
  codeNatureLieuRisque: '2',
  natureLieu: 'Appartement',
  codeJuridique: '1',
  situationJuridiqueLieu: 'Locataire ou occupant à  titre gratuit',
  codePieceLieuRisque: '2',
  nombrePieces: '1 à 2 Pièces (ou 2 Pièces)',
  codeTrancheMobilier: '3',
  patrimoineMobilier: '3 501 à 6 800 ',
  societaire: '1234567'
})

const doctypeFoyer = models.baseModel.createNew({
  displayName: 'foyer',
  docType: 'fr.maif.maifuser.foyer',
  name: 'fr.maif.maifuser.foyer',
  address: {
    street: '2 BOULEVARD DES BELGES',
    postCode: '69006',
    city: 'LYON 06',
    country: 'FRANCE',
    numeroPays: '000',
    deliveryOffice: 'LYON',
    inseeCode: '69386',
    residence: ''
  },
  membres: [
    {
      name: {
        codeTitrePersonne: '2',
        prefix: 'MME.',
        family: 'DUPOND',
        given: 'GERMAINE'
      },
      email: 'germainedupondmesinfos@gmail.com',
      telMobile: '+33012345678',
      birthdate: '1972-03-18',
      birthplace: {},
      codeProfessionSocietaire: '13',
      profession: '13 Agent, employé',
      codeQualitePersonne: '08',
      quality: 'Membre principal'
    }
  ]
})

const doctypeModalitesPaiement = models.baseModel.createNew({
  displayName: 'paymentterms',
  docType: 'fr.maif.maifuser.paymentterms',
  name: 'fr.maif.maifuser.paymentterms',
  rib: {
    bic: 'SOGEFRPP',
    iban: 'FR76300039876087612'
  },
  modePaiement: 'Prélèvement (1 fois)',
  societaire: '1234567',
  vendor: 'maif'
})

const doctypeSinistre = models.baseModel.createNew({
  displayName: 'sinistre',
  docType: 'fr.maif.maifuser.sinistre',
  name: 'fr.maif.maifuser.sinistre',
  docTypeVersion: 'MaifKonnector-0.0.0-draft'
})

const doctypeSocietaire = models.baseModel.createNew({
  displayName: 'societaire',
  docType: 'fr.maif.maifuser.societaire',
  name: 'fr.maif.maifuser.societaire',
  vendor: 'maif',
  thename: {
    codeTitrePersonne: '2',
    prefix: 'MME.',
    family: 'DUPOND',
    given: 'GERMAINE',
    maiden: ''
  },
  email: 'germainedupondmesinfos@gmail.com',
  telMobile: '+33012345678',
  birthdate: '1972-03-18',
  birthplace: {},
  codeProfessionSocietaire: '13',
  profession: '13 Agent, employé',
  codeSituationFamiliale: 'U',
  familySituation: 'union libre',
  codeActif: 'A Actif',
  referenceClient: '1234567'
})

const doctypeMaifUser = models.baseModel.createNew({
  displayName: 'maifuser',
  name: 'fr.maif.maifuser.maifuser'
})

doctypeMaifUser.getOne = callback =>
  doctypeMaifUser.all(function(err, maifusers) {
    let error = err || maifusers.error
    return callback(error, maifusers[0])
  })

module.exports = {
  doctypeMaifUser,
  doctypeContrat,
  doctypeHome,
  doctypeFoyer,
  doctypeModalitesPaiement,
  doctypeSinistre,
  doctypeSocietaire
}
