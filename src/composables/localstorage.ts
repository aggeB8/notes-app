import { getTitle } from './utils'

const lsActions = {
    get: {
        specific: (id: number) => {
            const getItem = localStorage.getItem(id.toString())

            if (getItem !== null) {
                return JSON.parse(getItem)
            } else {
                return `Item with ID ${id} doesn't exist`
            }
        },
        all: () => {
            const lsData = { ...localStorage }
            const lsIds = Object.keys(lsData).map((id: string) => {
                return Number(id)
            })

            return {
                lsData: lsData,
                lsIds: lsIds
            }
        },
        latestId: () => {
            if (Object.keys({ ...localStorage }).length === 0) {
                return 0
            } else {
                return Math.max(...lsActions.get.all().lsIds)
            }
        }
    },

    save: (id: number, title: string, inputRaw: string) => {
        const localStorageData = {
            title: getTitle(id, title),
            inputRaw: inputRaw
        }
        localStorage.setItem(id.toString(), JSON.stringify(localStorageData))
    }
}

export default lsActions
