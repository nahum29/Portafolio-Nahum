import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import process from 'node:process'
import { projects, skills, certificates, contacts, experience, education } from '../data/portfolio'

// `public/resume.json` es la versión de tu CV en el estándar JSON Resume: la leen
// los sistemas de reclutamiento. Este test evita que se desincronice del portafolio.
const resume = JSON.parse(readFileSync(resolve(process.cwd(), 'public', 'resume.json'), 'utf8'))

describe('resume.json', () => {
  it('declara el estándar JSON Resume y los datos de contacto del portafolio', () => {
    expect(resume.$schema).toContain('resume-schema')
    expect(resume.basics.name).toBe('Nahum Emmanuel Gutiérrez González')
    expect(resume.basics.email).toBe(contacts.find(c => c.label === 'Correo personal').text)
    expect(resume.basics.telephone).toBe('+52 322 330 6890')
    expect(resume.basics.location.city).toBe('Tonalá')
    expect(resume.basics.profiles.some(p => p.network === 'GitHub')).toBe(true)
    expect(resume.basics.profiles.some(p => p.network === 'LinkedIn')).toBe(true)
  })

  it('publica exactamente los proyectos del portafolio, con sus enlaces', () => {
    expect(resume.projects.map(project => project.name)).toEqual(projects.map(project => project.title))
    expect(resume.projects.map(project => project.url ?? null)).toEqual(projects.map(project => project.url ?? null))
    expect(resume.projects.every(project => project.keywords.length > 0)).toBe(true)
    // Solo Tiendita C.P.S tiene repositorio público: su código debe quedar enlazado.
    const withRepo = projects.filter(project => project.repo)
    expect(withRepo.map(project => project.title)).toEqual(['Tiendita C.P.S'])
    withRepo.forEach(project => {
      const published = resume.projects.find(item => item.name === project.title)
      expect(published.repository).toBe(project.repo)
    })
  })

  it('replica las habilidades y los certificados', () => {
    expect(resume.skills.map(group => group.name)).toEqual(skills.map(group => group.title))
    expect(resume.skills.map(group => group.keywords)).toEqual(skills.map(group => group.items))
    expect(resume.certificates.map(certificate => certificate.name))
      .toEqual(certificates.map(([name]) => name))
  })

  it('recoge la experiencia y la formación sin perder entradas', () => {
    expect(resume.work).toHaveLength(experience.length)
    experience.forEach((item, index) => {
      expect(resume.work[index].position).toBe(item.role)
      expect(resume.work[index].startDate).toBe(item.period.split(' – ')[0])
      expect(resume.work[index].highlights).toEqual(item.highlights)
    })
    expect(resume.education).toHaveLength(education.length)
    education.forEach((item, index) => {
      expect(resume.education[index].institution).toBe(item.org)
      expect(resume.education[index].area).toBe(item.title)
    })
  })
})
