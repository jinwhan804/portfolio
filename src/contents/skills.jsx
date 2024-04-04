import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { FaNode } from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiReact,
    SiRedux,
    SiMysql,
    SiPostgresql,
    SiSequelize,
    SiTailwindcss,
    SiAmazonec2,
    SiAwsamplify,
    SiNginx,
    SiStyledcomponents,
    SiHtml5,
    SiCss3,
    SiSolidity,
    SiGithub,
    SiGit
} from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
            
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">                                
                        <div className="flex items-center gap-[8px]">
                            <FaNode />
                            <span className="md:w-[120px]">NodeJS</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SiExpress />
                            <span className="md:w-[120px]">Express</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>쿼리문으로 DB Schema 설계 및 CRUD 기능 구현이 가능합니다.</li>
                        <li>JWT 토큰을 활용해 access token 발행이 가능합니다.</li>
                    </ul>
                </li>

                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiMysql />
                            <span className="md:w-[120px]">My SQL</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SiPostgresql />
                            <span className="md:w-[150px]">Postgre SQL</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>DB에서 CRUD를 통해 데이터 관리가 가능합니다.</li>
                        <li>Foreign Key 설정 및 Table간 1:1, 1:N, N:M 관계 설정이 가능합니다.</li>
                    </ul>
                </li>

        
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiJavascript />
                            <span className="md:w-[120px]">Javascript</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SiTypescript />
                            <span className="md:w-[120px]">Typescript</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li></li>
                    </ul>
                </li>            
                
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiAmazonec2 />
                            <span className="md:w-[120px]">Ec2</span>
                        </div>
                        
                        <div className="flex items-center gap-[8px]">
                            <SiNginx />
                            <span className="md:w-[120px]">Nginx</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>EC2로 서버 배포를 해보았습니다.</li>
                        <li>http와 https의 프로토콜 차이를 이해하고 certBot을 사용해 인증서 발급을 수행해보았습니다.</li>                                
                        <li>nginx로 reverse proxy 설정을 해보았습니다.</li>
                    </ul>
                </li>

                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiSolidity />
                            <span className="md:w-[120px]">Solidity</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>NFT를 remixIDE로 배포해 보았습니다.</li>
                    </ul>
                </li>
            
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiGit />
                            <span className="md:w-[120px]">Git</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SiGithub />
                            <span className="md:w-[120px]">Github</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>Git에 branch 생성이 가능하며 local에 연결하여 data push, pull을 할 수 있습니다.</li>
                        <li>branch merge의 유의 사항을 이해하고 있으며 master branch 관리가 가능합니다.</li>
                    </ul>
                </li>
        
                <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-center">
                    <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-left gap-[8px]">
                        <div className="flex items-center gap-[8px]">
                            <SiReact />
                            <span className="md:w-[120px]">React</span>
                        </div>
                        <div className="flex items-center gap-[8px]">
                            <SiRedux />
                            <span className="md:w-[120px]">Redux</span>
                        </div>
                    </span>
                    <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                        <li>react의 생명주기에 대해 숙지했습니다.</li>
                        <li>함수형과 객체지향의 차이점을 숙지하였습니다.</li>
                        <li>상태관리에 대해 이해하고 redux를 활용하여 상태관리를 하였습니다.</li>
                    </ul>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
