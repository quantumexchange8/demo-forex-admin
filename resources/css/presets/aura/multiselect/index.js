export default {
    root: ({ props, state }) => ({
        class: [
            // Font
            'leading-none',

            // Display and Position
            'inline-flex',
            'relative',

            // Shape
            'rounded-lg',

            // Color and Background
            { 'bg-white': !props.disabled },
            'border',
            { 'border-gray-300': !props.invalid },

            // Invalid State
            'invalid:focus:ring-red-200',
            'invalid:hover:border-red-500',
            { 'border-red-500': props.invalid },

            // Transitions
            'transition-all',
            'duration-200',

            // States
            { 'hover:border-gray-400': !props.invalid },
            { 'outline-none outline-offset-0 z-10 ring-1 ring-primary-500': state.focused },

            // Misc
            'cursor-pointer',
            'select-none',
            { 'bg-gray-200 select-none pointer-events-none cursor-default': props.disabled }
        ]
    }),
    labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
    label: ({ props, parent }) => ({
        class: [
            'text-sm',

            // Spacing
            {
                'py-3 px-1': props.display === 'comma' || (props.display === 'chip' && !props?.modelValue?.length),
                'py-1 px-1': props.display === 'chip' && props?.modelValue?.length > 0,
                'ml-3': parent.instance.$name !== 'IconField'
            },

            // Color
            { 'text-gray-800': props.modelValue?.length, 'text-gray-400': !props.modelValue?.length },
            'placeholder:text-gray-400',

            // Transitions
            'transition duration-200',

            // Misc
            'overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis'
        ]
    }),
    dropdown: {
        class: [
            // Flexbox
            'flex items-center justify-center',
            'shrink-0',

            // Color and Background
            'bg-transparent',
            'text-gray-500',

            // Size
            'w-10',

            // Shape
            'rounded-r-lg'
        ]
    },
    overlay: {
        class: [
            // Colors
            'bg-white',
            'text-gray-700',

            // Shape
            'border border-gray-300',
            'rounded-lg',
            'shadow-md',
            'mt-[2px]'
        ]
    },
    header: {
        class: [
            //Flex
            // 'flex items-center justify-between',
            'flex items-center',

            // Spacing
            'p-3',
            'm-0',
            'gap-2',

            //Shape
            'border-b',
            'rounded-tl-lg',
            'rounded-tr-lg',

            // Color
            'text-gray-950',
            'bg-white',
            'border-gray-200',

            '[&_[data-pc-name=pcfiltercontainer]]:!flex-auto',
            '[&_[data-pc-name=pcfilter]]:w-full'
        ]
    },
    headerCheckboxContainer: {
        class: [
            'relative',

            // Alignment
            'inline-flex',
            'align-bottom',

            // Size
            'w-5',
            'h-5',

            // Spacing
            'mr-2',

            // Misc
            'cursor-pointer',
            'select-none'
        ]
    },
    listContainer: {
        class: [
            // Sizing
            'max-h-[200px]',

            // Misc
            'overflow-auto'
        ]
    },
    list: {
        class: 'p-1 list-none m-0'
    },
    option: ({ context }) => ({
        class: [
            'relative',
            'flex items-center',

            // Font
            'leading-none',
            'text-sm',

            // Spacing
            'm-0 px-3 py-2 gap-2',
            'first:mt-0 mt-[2px]',

            // Shape
            'border-0 rounded',

            // Colors
            {
                'text-gray-700': !context.focused && !context.selected,
                // 'bg-gray-200': context.focused && !context.selected,
                'text-gray-700': context.focused && !context.selected,
                'bg-primary-100': context.selected
            },

            //States
            { 'hover:bg-gray-100': !context.focused && !context.selected },
            { 'hover:bg-highlight-emphasis': context.selected },
            { 'hover:text-gray-700 hover:bg-gray-100': context.focused && !context.selected },

            // Transition
            'transition-shadow duration-200',

            // Misc
            'cursor-pointer overflow-hidden whitespace-nowrap'
        ]
    }),
    optionGroup: {
        class: [
            'font-semibold',

            // Spacing
            'm-0 py-2 px-3',

            // Colors
            'text-gray-400',

            // Misc
            'cursor-auto'
        ]
    },
    emptyMessage: {
        class: [
            // Font
            'leading-none',
            'text-sm',

            // Spacing
            'py-2 px-3',

            // Color
            'text-gray-800',
            'bg-transparent'
        ]
    },
    loadingIcon: {
        class: 'text-gray-400 animate-spin'
    },
    transition: {
        enterFromClass: 'opacity-0 scale-y-[0.8]',
        enterActiveClass: 'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
        leaveActiveClass: 'transition-opacity duration-100 ease-linear',
        leaveToClass: 'opacity-0'
    }
};
