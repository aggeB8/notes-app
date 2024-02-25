import lsActions from './localstorage'

const getTitle = (id: number, title: string) => {
    if (title === '') {
        title = 'New note'
    }

    const lsDataArr = Object.entries(lsActions.get.all().lsData)

    let dupeTitle = title
    let dupeNum = 1

    for (;;) {
        console.log('ran loop')
        const bool = lsDataArr.map((lsDataItem) => {
            const lsId = lsDataItem[0]
            const lsData = JSON.parse(lsDataItem[1])
            if (id !== Number(lsId) && dupeTitle === lsData.title) {
                return true
            } else {
                return false
            }
        })

        if (bool.includes(true)) {
            dupeNum++
            dupeTitle = `${title} (${dupeNum})`
        } else {
            return dupeTitle
        }
    }
}

export { getTitle }
