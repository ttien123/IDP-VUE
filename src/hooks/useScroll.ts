import { inject, ref, VNodeRef } from 'vue';

export default function useScroll() {
    const myEl = ref<VNodeRef | undefined>(undefined); // Xác định kiểu cho myEl
    const smoothScroll = inject<(options: { scrollTo: HTMLElement | null; hash: string }) => void>('smoothScroll');

    const scrollToMyEl = () => {
        console.log('click');
        console.log('myEl.value', myEl.value);

        if (smoothScroll && myEl.value) {
            smoothScroll({
                scrollTo: myEl.value,
                hash: '#sampleHash',
            });
        }
    };

    return {
        myEl,
        scrollToMyEl,
    };
}
