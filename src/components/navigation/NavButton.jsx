import React from 'react'
import Link from 'next/link'
import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from 'lucide-react'
const getIcon = (icon) =>{
    switch(icon){
        case "home":
            return <Home className='w-full h-auto' strokeWidth={1.5} />;
        case "about":
            return <User className='w-full h-auto' strokeWidth={1.5} />;
        case "projects":
            return <Palette className='w-full h-auto' strokeWidth={1.5} />;
        case "contact":
            return <Phone className='w-full h-auto' strokeWidth={1.5} />;
        case "github":
            return <Github className='w-full h-auto' strokeWidth={1.5} />;
        case "linkedin":
            return <Linkedin className='w-full h-auto' strokeWidth={1.5} />;
        case "twitter":
            return <Twitter className='w-full h-auto' strokeWidth={1.5} />;
        case "resume":
            return <NotebookText className='w-full h-auto' strokeWidth={1.5} />;
        default :
        return <Home className='w-full h-auto' strokeWidth={1.5} />;
    }
}
export const NavButton = ({x,y,label,link,icon,newTab}) => {
  return (
    <div 
    className='absolute cursor-pointer z-50'
    style={
        {transform:`translate(${x},${y})`}
    }
    >
        <Link href={link} target={newTab ? '_blank' : 'self'} className='text-foreground rounded-full flex items-center justify-center custom-bg' aria-label={label} name={label}>
        <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse hover:text-accent group-hover:pause'>{getIcon(icon)}
        <div className="peer absolute bg-transparent top-0 left-0 w-full h-full"></div>
        <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>{label}</span>
        </span>
        </Link>
    </div>
  )
}
