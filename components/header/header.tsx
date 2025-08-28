import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const Header = () => {
    return (
        <>
            <HeaderBg />
            <header className="relative bg-background">
                <div className="flex h-5 w-full items-center justify-between gap-4 px-2 py-10 pb-7 md:h-20 md:px-20 md:py-14 2xl:px-96 3xl:px-[40rem]" >
                    <Image
                        width={144}
                        height={96}
                        src="/images/bosch_logo_de.svg"
                        alt="Logo"
                        className="scale-75 md:scale-100"
                    />
                    {/* <Divider orientation="vertical" className="bg-[#7cb305] h-8" /> */}
                    <Button variant="ghost" size="icon" className="size-9 md:hidden">
                        <Menu />
                    </Button>

                    <div className="hidden h-full items-center gap-2 md:flex ">
                        {/* <h2 className="text-xl text-black font-bold leading-tight tracking-wide">
                            Supplier Bundling - Bottleneck Prevention
                        </h2> */}
                        {/* <div className="flex h-full "> */}
                        {/* <IconButton icon={CircleQuestionMark} >Help</IconButton> */}
                        <Button variant={'link'}>About us</Button>
                        {/* <Button variant={'link'}>OPEX</Button> */}
                        <Button variant={'link'}>Recruitment</Button>
                    </div>
                </div>

            </header>
        </>

    )
}

const HeaderBg = () => {
    return (<div
        className="absolute left-0 top-0 z-20 h-1.5 w-full bg-[url('/images/header-cover.svg')] bg-cover bg-center bg-no-repeat"
    />)
}

export default Header