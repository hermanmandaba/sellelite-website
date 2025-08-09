// Types globaux pour SellElite Agency
import * as React from 'react';

/** Informations SEO de la page */
export interface MetaData {
  title: string
  description: string
  keywords?: string[]
}

/** Liens de navigation */
export interface NavLink {
  name: string
  href: string
  external?: boolean
}

/** Informations de contact */
export interface ContactInfo {
  email: string
  phone?: string
  address?: string
}

/** Données d’un service proposé */
export interface Service {
  id: string
  title: string
  description: string
  icon?: React.ReactElement
}

/** Formulaire de contact */
export interface ContactFormData {
  name: string
  email: string
  message: string
}
