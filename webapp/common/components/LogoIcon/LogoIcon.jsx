/* global requestAnimFrame */
import React, { PureComponent } from 'react'


export default class LogoIcon extends PureComponent {

    componentDidMount() {
        const canvasDom = this.canvasE
        const canvas = canvasDom.getContext('2d')
        const canvasWidth = canvasDom.offsetWidth
        const canvasHeight = canvasDom.offsetHeight
        let a = 1

        function draw() {
            a += 1
            if (a > 200) {
                a = 0
            }
            canvas.clearRect(0, 0, canvasWidth, canvasHeight)


            canvas.beginPath()
            canvas.lineWidth = canvasHeight / 10
            canvas.strokeStyle = '#c00'
            canvas.arc(canvasWidth / 2, canvasHeight / 2, 9 * canvasHeight / 20, Math.PI + 2 * a * Math.PI / 200, Math.PI + 1.90 * Math.PI + 2 * a * Math.PI / 200, false)
            canvas.stroke()
            canvas.closePath()

            canvas.beginPath()
            canvas.lineWidth = canvasHeight / 10
            canvas.strokeStyle = '#c00'
            canvas.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 4, 0 + 2 * a * Math.PI / 200, 1.85 * Math.PI + 2 * a * Math.PI / 200, false)
            canvas.stroke()
            canvas.closePath()

            canvas.beginPath()
            canvas.lineWidth = 1
            canvas.fillStyle = '#c00'
            canvas.strokeStyle = '#c00'
            canvas.arc(canvasWidth / 2, canvasHeight / 2, canvasHeight / 15, 0, 2 * Math.PI, false)
            canvas.stroke()
            canvas.fill()
            canvas.closePath()

            requestAnimFrame(() => {
                draw()
            })
        }

        draw()
    }

    render() {
        const { color, style, className, width, height, ...rest } = this.props
        return (
            <canvas
                ref={(ref) => { this.canvasE = ref }} color={color} style={{
                    display: 'block',
                    ...style,
                }}
                className={className} width={width} height={height} {...rest}
            />
        )
    }
}
