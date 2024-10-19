import { floor, random } from 'lodash'

import { avatarColors } from '@service/utils/static.data'

export class Utils {
  static avatarColor() {
    return avatarColors[floor(random(0.9) * avatarColors.length)]
  }

  static generateAvatar(text, bgColor, fgColor = 'white') {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    canvas.width = 200
    canvas.height = 200

    context.fillStyle = bgColor
    context.fillRect(0, 0, canvas.width, canvas.height)

    // draw text
    context.font = 'normal 80px san-serif'
    context.fillStyle = fgColor
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.fillText(text, canvas.width / 2, canvas.height / 2)

    return canvas.toDataURL('image/png')
  }
}
