const dateList: string[] = window.MOURNING_MODEDATE_LIST || [
    '7/7', // 七七事变
    '9/18', // 九一八事变
    '11/30', // 长者祭日
    '12/13', // 国家公祭日
]

// 自动开启哀悼模式
function autoEnableMourningMode() {
    const m = new Date().getMonth() + 1
    const d = new Date().getDate()
    const today = `${m}/${d}`
    if (dateList.some((date) => date === today)) {
        document.body.style.filter = 'grayscale(1)'
    }
}

window.addEventListener('load', autoEnableMourningMode)

