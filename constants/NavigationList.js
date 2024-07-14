export const SECTION_ANCHORS = {
  about: 'about',
  product: 'product',
  team: 'team',
  partners: 'partners',
  contacts: 'contacts'

}

export const navigationList = () => {
  return [
    {id: 1, link: `/#${SECTION_ANCHORS.about}`, text: 'Про нас', },
    {id: 2, link: `/#${SECTION_ANCHORS.product}`, text: 'Продук',},
    {id: 3, link: `/#${SECTION_ANCHORS.team}`, text: 'Команда',},
    {id: 4, link: `/#${SECTION_ANCHORS.partners}`, text: 'Партнери',},
    {id: 5, link: `/#${SECTION_ANCHORS.contacts}`, text: 'Контакти',},
  ]
}

