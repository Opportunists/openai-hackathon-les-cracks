import React from 'react';

class FadeInText extends React.Component<FadeInTextProps, {}> {
    public static defaultProps = {
        transitionTime: 1300,
        timingFunction: 'linear',
        delay: 200,
        threshold: 0.2,
        text: '',
        className: '',
        style: {},
        show: false,
        children: undefined,
    }

    constructor(props: any) {
        super(props);
    }

    shouldComponentUpdate(nextProps: any) {
        const showChanged = this.props.show !== nextProps.show;
        const textChanged = this.props.text !== nextProps.text;
        const childrenChanged = this.props.children !== nextProps.children;
        return showChanged || textChanged || childrenChanged;
    }

    renderSpan(text: string) {
        const { show, transitionTime, timingFunction } = this.props;

        const style = {
            opacity: show ? '1' : '0',
            transition: `opacity ${transitionTime}ms`,
            transitionDelay: `${this.props.delay}ms`,
            transitionTimingFunction: timingFunction,
        };

        return <span style={style}>{text}</span>;
    }

    render() {
        const { style, className, show, transitionTime, timingFunction } = this.props;
        console.log(this.props.children);

        let children_index = 0;
        const childrens = React.Children.map(this.props.children, child => {
            console.log(child);

            const style = {
                opacity: show ? '1' : '0',
                transition: `opacity ${transitionTime}ms`,
                transitionDelay: `${this.props.delay}ms`,
                transitionTimingFunction: timingFunction,
            };

            return React.cloneElement(child, {
                style: style,
                index: children_index++
            });
        });

        return (
            <div style={style} className={className}>
                {
                    childrens.map( (elt) => {
                        return elt
                    })
                }
            </div>
        );
    }
}

interface FadeInTextProps {
    text: string,
    show: boolean,
    transitionTime: number,
    timingFunction: string,
    delay: number,
    threshold: number,
    style: object,
    className: string,
    children: any,
}
export default FadeInText;