import VioletEllipse from 'public/common/violet-ellipse-target.svg';

import TargetBlock, { TargetBlockStarType } from './TargetBlock';

export default function Target() {
    return (
        <>
            <section className="z-40 grid grid-cols-3 gap-12 lg:flex lg:flex-col lg:gap-[3.2rem]">
                <TargetBlock title="ИИ&nbsp;в&nbsp;бизнесе" starType={TargetBlockStarType.Silver}>
                    <p className="text-xl font-light text-[#9D9D9D]">
                        ИИ&nbsp;<span className="font-medium text-white">упрощает операции</span> в&nbsp;сфере{' '}
                        <span className="font-medium text-white">бизнеса</span> и&nbsp;позволяет выполнить{' '}
                        <span className="font-medium text-white">задачи</span> за&nbsp;<span className="font-medium text-white">считанные минуты</span>.
                    </p>
                </TargetBlock>
                <TargetBlock title="Для кого?" starType={TargetBlockStarType.Silver}>
                    <p className="text-xl font-light text-[#9D9D9D]">
                        Для{' '}
                        <span className="font-medium text-white">
                            фрилансеров, экспертов, SMM-специалистов, дизайнеров, руководителей и&nbsp;предпринимателей.
                        </span>
                    </p>
                </TargetBlock>
                <TargetBlock title="Результат" starType={TargetBlockStarType.Gold}>
                    <p className="text-xl font-light text-[#9D9D9D]">
                        <span className="font-medium text-white">После</span> прохождения <span className="font-medium text-white">курса</span> вы&nbsp;станете
                        специалистом по&nbsp;<span>нейросетям</span>. Будете <span className="font-medium text-white">применять</span>&nbsp;ИИ{' '}
                        <span className="font-medium text-white">в</span>&nbsp;своем <span className="font-medium text-white">бизнесе</span>.{' '}
                        <span className="font-medium text-white">Увеличите</span> свои <span className="font-medium text-white">доходы</span> и&nbsp;
                        <span className="font-medium text-white">сократите расходы</span>. Получите возможность заняться тем, на&nbsp;что раньше не&nbsp;хватало
                        времени.
                    </p>
                </TargetBlock>
            </section>
            <div className="absolute left-[-72rem] top-[74rem]">
                <VioletEllipse className="h-[67.6rem] w-[67.6rem] translate-x-[40rem]" />
            </div>
        </>
    );
}
