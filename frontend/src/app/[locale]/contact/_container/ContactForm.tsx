// app/[locale]/contact/_sections/ContactForm.tsx
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

// React Icons
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaHeading,
    FaCommentDots,
    FaPaperPlane,
    FaCheckCircle,
    FaExclamationCircle,
    FaSpinner,
    FaShieldAlt
} from 'react-icons/fa';

// Zod Schema
const createContactSchema = (t: (key: string) => string) => z.object({
    name: z
        .string()
        .min(2, t('validation.name.min'))
        .max(50, t('validation.name.max')),
    email: z
        .string()
        .email(t('validation.email.invalid')),
    phone: z
        .string()
        .regex(/^\+?[0-9\s-]{10,}$/, t('validation.phone.invalid'))
        .optional()
        .or(z.literal('')),
    subject: z
        .string()
        .min(5, t('validation.subject.min'))
        .max(100, t('validation.subject.max')),
    message: z
        .string()
        .min(10, t('validation.message.min'))
        .max(1000, t('validation.message.max')),
    privacy: z
        .boolean()
        .refine((val) => val === true, t('validation.privacy.required')),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export default function ContactForm() {
    const t = useTranslations('Contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm<ContactFormData>({
        resolver: zodResolver(createContactSchema(t)),
        mode: 'onBlur',
    });

    const messageLength = watch('message')?.length || 0;

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
            const response = await fetch(`${baseUrl}/contact/messages/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    first_name: data.name.split(' ')[0] || data.name,
                    last_name: data.name.split(' ').slice(1).join(' ') || ' ',
                    email: data.email,
                    phone: data.phone || '',
                    subject: data.subject,
                    message: data.message,
                }),
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            console.log('Form data:', data);
            setIsSuccess(true);
            reset();
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            setSubmitError(t('form.error'));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 lg:p-10 border border-gray-100"
        >
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {t('form.title')}
                </h2>
                <p className="text-gray-600">
                    {t('form.subtitle')}
                </p>
            </div>

            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <SuccessMessage t={t} onReset={() => setIsSuccess(false)} />
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Ad Soyad */}
                        <FormField
                            label={t('form.fields.name.label')}
                            icon={FaUser}
                            error={errors.name?.message}
                        >
                            <input
                                {...register('name')}
                                type="text"
                                placeholder={t('form.fields.name.placeholder')}
                                className={inputClasses(errors.name)}
                                disabled={isSubmitting}
                            />
                        </FormField>

                        {/* Email və Telefon */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                label={t('form.fields.email.label')}
                                icon={FaEnvelope}
                                error={errors.email?.message}
                                required
                            >
                                <input
                                    {...register('email')}
                                    type="email"
                                    placeholder={t('form.fields.email.placeholder')}
                                    className={inputClasses(errors.email)}
                                    disabled={isSubmitting}
                                />
                            </FormField>

                            <FormField
                                label={t('form.fields.phone.label')}
                                icon={FaPhone}
                                error={errors.phone?.message}
                            >
                                <input
                                    {...register('phone')}
                                    type="tel"
                                    placeholder={t('form.fields.phone.placeholder')}
                                    className={inputClasses(errors.phone)}
                                    disabled={isSubmitting}
                                />
                            </FormField>
                        </div>

                        {/* Mövzu */}
                        <FormField
                            label={t('form.fields.subject.label')}
                            icon={FaHeading}
                            error={errors.subject?.message}
                            required
                        >
                            <select
                                {...register('subject')}
                                className={inputClasses(errors.subject)}
                                disabled={isSubmitting}
                            >
                                <option value="">{t('form.fields.subject.placeholder')}</option>
                                <option value="Vebsayt Hazırlanması">Vebsayt Hazırlanması</option>
                                <option value="SaaS & CRM Sistemləri">SaaS & CRM Sistemləri</option>
                                <option value="Mobil Tətbiq (iOS/Android)">Mobil Tətbiq (iOS/Android)</option>
                                <option value="SEO və Rəqəmsal Marketinq">SEO və Rəqəmsal Marketinq</option>
                                <option value="UI/UX Dizayn">UI/UX Dizayn</option>
                                <option value="Startap Tech Partner Modeli">Startap Tech Partner Modeli</option>
                                <option value="Digər">Digər</option>
                            </select>
                        </FormField>

                        {/* Mesaj */}
                        <FormField
                            label={t('form.fields.message.label')}
                            icon={FaCommentDots}
                            error={errors.message?.message}
                            required
                            helperText={`${messageLength}/1000`}
                        >
                            <textarea
                                {...register('message')}
                                rows={5}
                                placeholder={t('form.fields.message.placeholder')}
                                className={`${inputClasses(errors.message)} resize-none`}
                                disabled={isSubmitting}
                                maxLength={1000}
                            />
                        </FormField>

                        {/* Privacy Checkbox */}
                        <div className="flex items-start gap-3">
                            <div className="relative flex items-center">
                                <input
                                    {...register('privacy')}
                                    type="checkbox"
                                    id="privacy"
                                    className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 checked:border-blue-600 checked:bg-blue-600 transition-all"
                                    disabled={isSubmitting}
                                />
                                <FaCheckCircle
                                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                                    size={12}
                                />
                            </div>
                            <label htmlFor="privacy" className="text-sm text-gray-600 cursor-pointer select-none">
                                <FaShieldAlt className="inline mr-1 text-gray-400" size={12} />
                                {t('form.privacy.text')}{' '}
                                <a href="/privacy" className="text-blue-600 hover:underline font-medium">
                                    {t('form.privacy.link')}
                                </a>
                            </label>
                        </div>
                        {errors.privacy && (
                            <p className="text-sm text-red-500 flex items-center gap-1">
                                <FaExclamationCircle size={14} />
                                {errors.privacy.message}
                            </p>
                        )}

                        {/* Error Message */}
                        {submitError && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2"
                            >
                                <FaExclamationCircle size={18} />
                                {submitError}
                            </motion.div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                        >
                            {isSubmitting ? (
                                <>
                                    <FaSpinner size={20} className="animate-spin" />
                                    {t('form.submitting')}
                                </>
                            ) : (
                                <>
                                    <FaPaperPlane size={18} />
                                    {t('form.submit')}
                                </>
                            )}
                        </button>
                    </form>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// Yardımçı komponentlər
function FormField({
    label,
    icon: Icon,
    error,
    children,
    required,
    helperText
}: {
    label: string;
    icon?: React.ElementType;
    error?: string;
    children: React.ReactNode;
    required?: boolean;
    helperText?: string;
}) {
    return (
        <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700 flex items-center gap-2">
                {Icon && <Icon size={16} className="text-gray-400" />}
                <span>{label}</span>
                {required && <span className="text-red-500">*</span>}
            </label>
            {children}
            <div className="flex justify-between items-center min-h-[20px]">
                {error ? (
                    <p className="text-sm text-red-500 flex items-center gap-1 animate-pulse">
                        <FaExclamationCircle size={14} />
                        {error}
                    </p>
                ) : (
                    <span />
                )}
                {helperText && (
                    <span className={`text-xs ${parseInt(helperText) > 900 ? 'text-orange-500' : 'text-gray-400'}`}>
                        {helperText}
                    </span>
                )}
            </div>
        </div>
    );
}

function inputClasses(error?: { message?: string }) {
    return `w-full px-4 py-3.5 rounded-xl border-2 bg-gray-50/50 transition-all duration-300 outline-none
        ${error
            ? 'border-red-300 focus:border-red-500 focus:bg-red-50/30 bg-red-50/30 focus:ring-4 focus:ring-red-500/20'
            : 'border-gray-200 focus:border-blue-500 focus:bg-white hover:border-gray-300 focus:ring-4 focus:ring-blue-500/20'
        }
        placeholder:text-gray-400 text-gray-900 disabled:opacity-60 disabled:cursor-not-allowed`;
}

function SuccessMessage({ t, onReset }: { t: (key: string) => string; onReset: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-12"
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
                <FaCheckCircle size={40} className="text-green-600" />
            </motion.div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {t('form.success.title')}
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
                {t('form.success.message')}
            </p>
            <button
                onClick={onReset}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center gap-2"
            >
                <FaPaperPlane size={14} />
                {t('form.success.newMessage')}
            </button>
        </motion.div>
    );
}